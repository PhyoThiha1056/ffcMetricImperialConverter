function ConvertHandler() {
  let inputRegex = /[a-z]+|[^a-z]+/gi
  
  this.getNum = function(input) {
  var result;
  
  result = input.match(inputRegex)[0];
    
    let numberRegex = /\d/

if(numberRegex.test(result) === false){
  result = 1
}
    
    if(result.toString().includes('/')){
     let values = result.toString().split('/')
     if(values.length != 2){
    return 'invalid number'
  }
  values[0] = parseFloat(values[0])
  values[1] = parseFloat(values[1])
  result = parseFloat((values[0]/values[1]).toFixed(5)) 
}
    
    if(isNaN(result)){
    return 'invalid number'
  };
      
  return result;
};
  
  this.getUnit = function(input) {
  var result;
    
    if (result = input.match(inputRegex)[1]) {
      result = input.match(inputRegex)[1].toLowerCase();
    }else if (!result) {
      result = input.match(inputRegex)[0].toLowerCase();
    }
    
    if (result === 'l') {
      result = 'L'
    }
    
    let validUnits = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG']
  if(!validUnits.includes(result)){
    return 'invalid unit'
  }
  
  return result;
};
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    if(initUnit === 'gal' || initUnit === 'GAL') {
      result = 'L';
    }else if(initUnit === 'l' || initUnit === 'L') {
      result = 'gal';
    }
    
    if(initUnit === 'lbs' || initUnit === 'LBS') {
      result = 'kg';
    }else if(initUnit === 'kg' || initUnit === 'KG') {
      result = 'lbs';
    }
    
    if(initUnit === 'mi' || initUnit === 'MI') {
      result = 'km';
    }else if(initUnit === 'km' || initUnit === 'KM') {
      result = 'mi';
    }
    
    return result;
    
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    switch (unit) {
      case 'gal':
      case 'GAL':
        result = 'gallons';
        break;
      case 'l':
      case 'L':
        result = 'liters';
        break;
      case 'lbs':
      case 'LBs':
        result = 'pounds';
        break;
      case 'kg':
      case 'KG':
        result = 'kilograms';
        break;
      case 'mi':
      case 'MI':
        result = 'miles';
        break;
      case 'km':
      case 'KM':
        result = 'kilometers';
        break;
      
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    if(initUnit === 'gal' || initUnit === 'GAL') {
      result = (initNum * galToL).toFixed(5);
    }else if(initUnit === 'l' || initUnit === 'L') {
      result = (initNum/galToL).toFixed(5);
    }
    
    if(initUnit === 'lbs' || initUnit === 'LBS') {
      result = (initNum * lbsToKg).toFixed(5);
    }else if(initUnit === 'kg' || initUnit === 'KG') {
      result = (initNum/lbsToKg).toFixed(5);
    }
    
    if(initUnit === 'mi' || initUnit === 'MI') {
      result = (initNum * miToKm).toFixed(5);
    }else if(initUnit === 'km' || initUnit === 'KM') {
      result = (initNum/miToKm).toFixed(5);
    }
    
    return parseFloat(result);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' +  returnNum+ ' ' + this.spellOutUnit(returnUnit)
    
    return result;
  };
  
}

module.exports = ConvertHandler;
