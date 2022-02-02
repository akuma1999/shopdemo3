import { Schema, connect, model } from 'mongoose';

const ConString: string =
	process.env.DATABASE_DOMAIN === undefined
		? 'http://localhost:27017/test'
		: process.env.DATABASE_DOMAIN;
connect(ConString);

const item = new Schema({
	id: String,
	name: String,
	count: Number,
	price: Float64Array,
});

const customer = new Schema({
	customer: String,
	time: Date,
	items: [item],
});

export const Bill = model('bill', customer);
