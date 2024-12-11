const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    suite('Function convertHandler.getNum(input)', () => {
      test('Whole number input', (done) => {
        var input = '32L';
        assert.equal(convertHandler.getNum(input), 32);
        done();
      });
      
      test('Invalid Input (double fraction)', function(done) {
      let input = '3/7.2/4kg'
      let expected ='invalid number'
      assert.equal(convertHandler.getNum(input), 'invalid number');
      done();
});
    test('Decimal Input', function(done) {
  var input = '32.65L';
  assert.equal(convertHandler.getNum(input),32.65);
  done();
});

test('Fractional Input', function(done) {
  var input = '12/8';
  assert.equal(convertHandler.getNum(input),1.5);
  done();
});

test('Fractional Input w/ Decimal', function(done) {
  var input = '27/5.4';
  assert.equal(convertHandler.getNum(input),5);
  done();
});
      
      test('No Numerical Input', function(done) {
  let input = 'kg'
  let expected = 1
  assert.equal(convertHandler.getNum(input), 1);
  assert.equal(convertHandler.getUnit(input), 'kg')
  done()
});
      
    });
  
    suite('Function convertHandler.getUnit(input)', () => {
      test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
        var expected = ['gal','L','mi','km','lbs','kg','gal','L','mi','km','lbs','kg'];
      input.forEach((ele, i) => {
      assert.equal(convertHandler.getUnit(32 + ele),expected[i])
  });
  done();
});
      
      test('Unknown Unit Input', function(done) {
      let input = 'g'
      let expected ='invalid unit'
      assert.equal(convertHandler.getUnit(32 + input), expected)
      done()
});
      
    });
  
  suite('Function convertHandler.convert(initNum, initUnit)', () => {
      test('Gal to L', function(done) {
      var input = [5, 'gal'];
        var expected = 18.92705;
      assert.approximately(convertHandler.convert(input[0], input[1]),expected,0.1);
        done();
  });
  
  test('L to Gal', function(done) {
      var input = [5, 'L'];
        var expected = 1.32086;
      assert.approximately(convertHandler.convert(input[0], input[1]),expected,0.1);
    done();
  });
    
    test('Lbs to Kg', function(done) {
  var input = [5, 'lbs'];
  var expected = 2.26796;
  assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
  done();
});

test('Kg to Lbs', function(done) {
  var input = [5, 'kg'];
  var expected = 11.0231;
  assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
  done();
});
    
    test('Lbs to Kg', function(done) {
  var input = [5, 'lbs'];
  var expected = 2.26796;
  assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
  done();
});

test('Kg to Lbs', function(done) {
  var input = [5, 'kg'];
  var expected = 11.0231;
  assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
  done();
});
    
    test('Mi to Km', function(done) {
  var input = [5, 'mi'];
  var expected = 8.04672;
  assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
  done();
});

test('Km to Mi', function(done) {
  var input = [5, 'km'];
  var expected = 3.10686;
  assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
  done();
});
     
    });
  
  
  });
  
  