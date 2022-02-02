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
	trademark: String,
	color: [String],
	resolution: String,
	frequency: String,
	size: Float32Array,
	cpu: String,
	cpu_speed: String,
	cache: String,
	card: String,
	card_trademark: String,
	ram_size: String,
	ram_bus: String,
	ram_style: String,
	ram_num: Number,
	Material: String,
	rom: String,
	Pin: Number,
	price: Number,
	count: Number,
	description: String,
	comments: [comment],
	ranks: [rank],
	favours: [favour],
	category: String,
});

export const Product = model('product', product);
