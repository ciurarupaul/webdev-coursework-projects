const mongoose = require('mongoose');
const slugify = require('slugify');

// const validator = require('validator');

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tour must have a name'],
      unique: true,
      trim: true,
      maxlength: [40, 'A tour name must have less or equal than 40 characters'],
      minlength: [10, 'A tour name must have more or equal than 40 characters'],
      // validate: [validator.isAlpha, 'Tour name must only contain characters'],   -   doesn't allow spaces
    },
    slug: String,
    duration: {
      type: Number,
      required: [true, 'A tour must have a duration'],
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'A tour must have a group size'],
    },
    difficulty: {
      type: String,
      required: [true, 'A tour must have a difficulty'],
      enum: {
        values: ['easy', 'medium', 'difficult'],
        message: 'Difficulty is either: easy, medium or difficult',
      },
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'Ratings must be above or equal to 1'],
      max: [5, 'Ratings must be below or equal to 5'],
      set: (val) => Math.round(val * 10) / 10,
      // 4.6666 -> 46.666 -> 47 -> 4.7
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'A tour must have a price'],
    },
    priceDiscout: {
      type: Number,
      validate: {
        validator: function (val) {
          // 'this' only points to current doc on NEW document creation
          return val < this.price;
        },
        message: 'Discout price ({VALUE}) should be below the regular price',
        // {VALUE} is mongoose related
      },
    },
    summary: {
      type: String,
      trim: true,
      // removes white space
      required: [true, 'A tour must have a description'],
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, 'A tour must have a cover image'],
    },
    images: [String],
    // array of strings
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
      // never output this
    },
    startDates: [Date],
    secretTour: {
      type: Boolean,
      default: false,
    },
    startLocation: {
      // GeoJSON
      type: {
        type: String,
        default: 'Point',
        enum: ['Point'],
      },
      coordinates: [Number], // array of numbers
      address: String,
      description: String,
    },
    locations: [
      {
        type: {
          type: String,
          default: 'Point',
          enum: ['Point'],
        },
        coordinates: [Number],
        address: String,
        description: String,
        day: Number,
      },
    ],
    // only contains the ids, not the whole objects -> referencing
    guides: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  },
  {
    // only display virtuals, when data is sent in JSON or Obj format
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

// set index to most used props
// tourSchema.index({ price: 1 });
tourSchema.index({ price: 1, ratingsAverage: -1 });
tourSchema.index({ slug: 1 });
tourSchema.index({ startLocation: '2dsphere' });

// using normal function, beacause arrow functions dont get 'this' keyword
tourSchema.virtual('durationWeeks').get(function () {
  return this.duration / 7;
});

// Virtual populate
tourSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'tour',
  localField: '_id',
});

// DOCUMENT MIDDLEWARE - runs before .save() and .create()
tourSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// EMBEDDED TOUR GUIDE - should also update code for updating a tour
// tourSchema.pre('save', async function (next) {
//   const guidesPromises = this.guides.map(async (id) => await User.findById);
//   this.guides = await Promise.all(guidesPromises);
//   next();
// });

// QUERY MIDDLEWARE

tourSchema.pre(/^find/, function (next) {
  // executes for every command that starts with 'find', ca sa acomodeze si findOne, care e in spatele findById
  this.find({ secretTour: { $ne: true } });

  this.start = Date.now();
  next();
});

tourSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'guides',
    select: '-__v -passwordChangedAt',
  });
  // .populate to get data for the guides - the tour obj only contains their ids

  next();
});

tourSchema.post('/^find/', function (docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds.`);
  next();
});

// // AGGREDATION MIDDLEWARE
// tourSchema.pre('aggregate', function (next) {
//   this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });

//   console.log(this.pipeline());
//   next();
// });

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
