import Joi from 'joi';
import uuid from 'uuid/v4';

class Parcel {
  constructor(parcels, currentUserId) {
    this.parcels = [];
    this.currentUserId = 'USER_001';

		this.create = this.create.bind(this);
		this.getAll = this.getAll.bind(this);
  }

  create (request, response) {
    const parcelSchema = Joi.object().keys({
      firstName: Joi.string().min(2).required(),
      lastName: Joi.string().min(2).required(),
      phoneNumber: Joi.string().min(11).max(11).required(),
      destinationAddress: Joi.string().min(5).max(50).required(),
      price: Joi.number().required(),
    });

    const { error, value } = Joi.validate(request.body, parcelSchema);
    if (error) {
      return response.status(400).json({
        error,
      });
    }
    const userID = this.currentUserId;

    const newParcelData = { id: uuid(), userID, ...value };
    this.parcels.push(newParcelData);

    return response.status(201).json(newParcelData);
	}
	
	getAll (request, response) {
		return this.parcels.length ?
			response.status(200).json(this.parcels) :
				response.status(404).json({
					message: 'No parcels availabel'
				});
	}
}

export default Parcel;
