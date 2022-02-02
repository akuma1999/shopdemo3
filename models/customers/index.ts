import { Schema, connect, model } from 'mongoose';

const ConString: string =
	process.env.DATABASE_DOMAIN === undefined
		? 'http://localhost:27017/test'
		: process.env.DATABASE_DOMAIN;
connect(ConString);

const customer = new Schema({
	name: String,
	account: String,
	password: String,
});

export const Customer = model('customer', customer);
