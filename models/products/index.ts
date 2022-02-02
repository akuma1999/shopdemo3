import { Schema, connect, model } from 'mongoose';

const ConString: string =
	process.env.DATABASE_DOMAIN === undefined
		? 'http://localhost:27017/test'
		: process.env.DATABASE_DOMAIN;
connect(ConString);

const comment = new Schema({
	name: String,
	time: Date,
	body: String,
});

const rank = new Schema({
	name: String,
	time: Date,
	rank: Number,
});

const favour = new Schema({
	name: String,
	time: Date,
	rank: Number,
});

const product = new Schema({
	name: String,
	color: [String],
	size: [String],
	price: Number,
	count: Number,
	description: String,
	comments: [comment],
	ranks: [rank],
	favours: [favour],
	category: String,
});

export const Product = model('product', product);
