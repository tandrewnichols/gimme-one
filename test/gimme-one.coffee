describe 'gimme-one', ->
  afterEach -> Math.random = Math._random
  Given -> @subject = require '../lib/gimme-one'
  Given -> Math._random = Math.random
  Given -> Math.random = -> 0.2
  Given -> @list = [1, 2, 3, 4]
  Then -> @subject(@list).should.equal 2
