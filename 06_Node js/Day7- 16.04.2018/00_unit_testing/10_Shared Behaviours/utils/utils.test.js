var User = require('./school').User
  , Admin = require('./school').Admin
  , shared = require('./utils');

describe('User', function(){
  beforeEach(function(){
    this.user = new User('tobi', 'holowaychuk');
  })

  shared.shouldBehaveLikeAUser();
})

describe('Admin', function(){
  beforeEach(function(){
    this.user = new Admin('tobi', 'holowaychuk');
  })

  shared.shouldBehaveLikeAUser();

  it('should be an .admin', function(){
    this.user.admin.should.be.true;
  })
})