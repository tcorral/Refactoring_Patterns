function MicrowaveMotor()
{
	this.bCooking = false;
}
MicrowaveMotor.prototype.isInUse = function()
{
	return this.bCooking;
};
MicrowaveMotor.prototype.cook = function(oFood)
{
	this.bCooking = true;
	console.log(oFood, 'is cooking');
	console.log(oFood, 'is cooked');
	this.bCooking = false;
};