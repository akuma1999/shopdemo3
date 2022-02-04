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
	cpu: String,
	ram:String,
	'o-cung':String,
	'man-hinh':String,
	'card-man-hinh':String,
	'cong-ket-noi':String,
	'dac-biet'	:String,
	'he-dieu-hanh': String,
	'thiet-ke': String,
	'kich-thuoc-trong-luong':String,
	'thoi-diem-ra-mat':String,
	price:String,
	comment:[comment],
	rank:[rank],
	favour:[favour],
	img : [String],
	name : String
});

export const Product = model('product', product);
