const should=require('should');

exports.shouldBehaveLikeAUser = function(){
  it('should have .name.first', function(){
    this.user.name.first.should.equal('tobi');
  })

  it('should have .name.last', function(){
    this.user.name.last.should.equal('holowaychuk');
  })

  describe('.fullname()', function(){
    it('should return the full name', function(){
      this.user.fullname().should.equal('tobi holowaychuk');
    })
  })
};