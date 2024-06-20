import httpStatus from 'http-status'

import sendResponse from '../../utils/sendResponse'
import { catchAsync } from '../../utils/catchAsync'
import { FacilityServices } from './facilities.services'
import { Facility } from './facilities.model'


const createFacility = catchAsync(async (req, res) => {
  const result = await FacilityServices.createFacilityIntoDB(req.body)
const {_id,name,description,pricePerHour,location,isDeleted} = result;
  // send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Facility added successfully',
    data:{
      _id,
    name,
    description,
    pricePerHour,
    location,
    isDeleted
    },
  })
})

const getAllFacility = catchAsync(async (req, res) => {
  try {
    const result = await FacilityServices.getAllFacilityFromDB()
    // send response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'All Facilities retrieved Successfully',
      data: result,
    })
  } catch (error) {
    // send response
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'No Data Found',
      data: [],
    })
  }
})

const updateFacility = catchAsync(async (req, res) => {
  try {
    const { id } = req.params
    const result = await FacilityServices.updateFacilityIntoDB(id, req.body)
    
    // const {_id,name:name,description:description,pricePerHour:pricePerHour,location:location,isDeleted:isDeleted} = req.body;
    // send response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Facility updated Successfully',
      data:
      result
      
    })
  } catch (error) {
    // send response
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'No Data Found',
      data: [],
    })
  }
})

const deleteFacility = catchAsync(async (req, res) => {
  try {
    const { id } = req.params
    const result = await FacilityServices.deleteFacilityFromDB(id)
    const {_id,name,description,pricePerHour,location,isDeleted} = result;

    // send response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Facilities Deleted Successfully',
      data: {
        _id,
        name,
        description,
        pricePerHour,
        location,
        isDeleted
      },
    })
  } catch (error) {
    // send response
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'No Data Found',
      data: [],
    })
  }
})

export const FacilityControllers = {
  createFacility,
  getAllFacility,
  updateFacility,
  deleteFacility,
}