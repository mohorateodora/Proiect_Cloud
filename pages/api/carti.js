import {sendMethodNotAllowed, sendOk,} from '@/utils/apiMethods.js';
import {getCollection} from "@/utils/functions";
import {ObjectId,} from 'mongodb';
const COLLECTION_NAME = 'carti';

const getRecords = async () => {
	const collection = await getCollection(COLLECTION_NAME);
	return await collection.find({}).toArray();
}

const getRecord = async (id) => {
    const collection = await getCollection(COLLECTION_NAME);
    return await collection.findOne({_id: ObjectId.createFromHexString(id)});
}

const createRecord = async (record) => {
	const collection = await getCollection(COLLECTION_NAME);
	return await collection.insertOne(record);
}

const updateRecord = async (record) => {
	const collection = await getCollection(COLLECTION_NAME);
	const id = record._id;
	delete record._id;
	return collection.updateOne({_id: new ObjectId(id)}, {$set: record});
}

const deleteRecord = async (id) => {
	const collection = await getCollection(COLLECTION_NAME);
	return collection.deleteOne({_id: new ObjectId(id)});
}

export default async function handler(req, res) {

	const isAllowedMethod = req.method === 'GET' || req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE';
	
    if(!isAllowedMethod) {
		return sendMethodNotAllowed(res);
	}

	if(req.method === 'GET' && req.query.id) {
		const id = req.query.id;
		const record = await getRecord(id);
		return sendOk(res, record);
	}
	else if(req.method === 'GET') {
		const records = await getRecords();
		return sendOk(res, records);
	}
	else if(req.method === 'POST') {
		const record = req.body;
		const result = await createRecord(record);
		return sendOk(res, result);
	}
	else if(req.method === 'PUT') {
		const record = req.body;
		const result = await updateRecord(record);
		return sendOk(res, result);
	}
	else if(req.method === 'DELETE') {
		const id = req.query.id;
		const result = await deleteRecord(id);
		return sendOk(res, result);
	}
}