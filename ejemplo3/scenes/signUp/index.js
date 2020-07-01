module.exports = function createPet(petInfo) {
    const response = {
        hasAnError: false
    }
    if (petInfo.pet_name === '' || petInfo.pet_email === '' ||
        petInfo.pet_breed === '' || petInfo.pet_password === '') {
        response.hasAnError = true;
    } else {
        //... Register the pet in database
    }
    return response
}