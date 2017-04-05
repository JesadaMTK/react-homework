import User from '../models/user';
import moment from 'moment';

const user = {
	index: (req, res, next) => {
	  User.find().lean().exec((err, users) => res.json(users));
	},

	create: (req, res, next) => {
		User.bulkWrite([{
	    insertOne: {
	      document: {
	        firstname: req.body.firstname,
		      lastname: req.body.lastname,
		      avatar: '',
		      email: req.body.email,
		      mobile: req.body.mobile
	      }
	    }
	  }]);

		res.send('created')
	},

	show: (req, res, next) => {
	  User.find({
	  	_id: req.params.userId
	  }).lean().exec((err, users) => res.json(users));
	},

	update: (req, res, next) => {
	  User.update(
		  { _id: req.params.userId },
		  {
		  	$set: {
		  		firstname: req.body.firstname,
		      lastname: req.body.lastname,
		      avatar: '',
		      email: req.body.email,
		      mobile: req.body.mobile
		  	}
		  }
		).exec()

		res.send('updated')
	},

	delete: (req, res, next) => {
		User.deleteOne({ _id: req.params.userId }).exec()

		res.send('deleted')
	}
} 

export default user;