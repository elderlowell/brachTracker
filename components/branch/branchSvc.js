angular.module('branchApp').service('branchSvc', function() {

  this.branchList = [
    {
      name: 'Montgomery',
      code: 1,
      nmls: 1111101,
      state: 'AL',
      manager: 'Hank Aaron'
    }
    ,{
      name: 'Juneau',
      code: 2,
      nmls: 1111102,
      state: 'AK',
      manager: 'Virgil Partch'
    }
    ,{
      name: 'Phoenix',
      code: 3,
      nmls: 1111103,
      state: 'AZ',
      manager: 'Barry Goldwater'
    }
    ,{
      name: 'Little Rock',
      code: 4,
      nmls: 1111104,
      state: 'AR',
      manager: 'Bill Clinton'
    }
    ,{
      name: 'Sacramento',
      code: 5,
      nmls: 1111105,
      state: 'CA',
      manager: 'Richard Nixon'
    }
    ,{
      name: 'Denver',
      code: 6,
      nmls: 1111106,
      state: 'CO',
      manager: 'Tim Allen'
    }
    ,{
      name: 'Hartford',
      code: 7,
      nmls: 1111107,
      state: 'CT',
      manager: 'Benedict Arnold'
    }
    ,{
      name: 'Dover',
      code: 8,
      nmls: 1111108,
      state: 'DE',
      manager: 'Valerie Bertinelli'
    }
    ,{
      name: 'Tallahassee',
      code: 9,
      nmls: 1111109,
      state: 'FL',
      manager: 'Steve Carlton'
    }
    ,{
      name: 'Atlanta',
      code: 10,
      nmls: 1111110,
      state: 'GA',
      manager: 'Gladys Knight'
    }
    ,{
      name: 'Honolulu',
      code: 11,
      nmls: 1111111,
      state: 'HI',
      manager: 'Tia Carrere'
    }
    ,{
      name: 'Boise',
      code: 12,
      nmls: 1111112,
      state: 'ID',
      manager: 'Frank Church'
    }
    ,{
      name: 'Springfield',
      code: 13,
      nmls: 1111113,
      state: 'IL',
      manager: 'Ronald Reagan'
    }
    ,{
      name: 'Indianapolis',
      code: 14,
      nmls: 1111114,
      state: 'IN',
      manager: 'James Dean'
    }
    ,{
      name: 'Des Moines',
      code: 15,
      nmls: 1111115,
      state: 'IA',
      manager: 'Johnny Carson'
    }
    ,{
      name: 'Topeka',
      code: 16,
      nmls: 1111116,
      state: 'KS',
      manager: 'Stan Kenton'
    }
    ,{
      name: 'Frankfort',
      code: 17,
      nmls: 1111117,
      state: 'KY',
      manager: 'Muhammad Ali'
    }
    ,{
      name: 'Baton Rouge',
      code: 18,
      nmls: 1111118,
      state: 'LA',
      manager: 'Louis Armstrong'
    }
    ,{
      name: 'Augusta',
      code: 19,
      nmls: 1111119,
      state: 'ME',
      manager: 'Stephen King'
    }
    ,{
      name: 'Annapolis',
      code: 20,
      nmls: 1111120,
      state: 'MD',
      manager: 'Benjamin Banneker'
    }
    ,{
      name: 'Boston',
      code: 21,
      nmls: 1111121,
      state: 'MA',
      manager: 'Emily Dickinson'
    }
    ,{
      name: 'Lansing',
      code: 22,
      nmls: 1111122,
      state: 'MI',
      manager: 'Earvin Johnson'
    }
    ,{
      name: 'St. Paul',
      code: 23,
      nmls: 1111123,
      state: 'MN',
      manager: 'Bob Dylan'
    }
    ,{
      name: 'Jackson',
      code: 24,
      nmls: 1111124,
      state: 'MS',
      manager: 'Jim Hensen'
    }
    ,{
      name: 'Jefferson City',
      code: 25,
      nmls: 1111125,
      state: 'MO',
      manager: 'Yogi Berra'
    }
    ,{
      name: 'Helena',
      code: 26,
      nmls: 1111126,
      state: 'MT',
      manager: 'Cary Cooper'
    }
    ,{
      name: 'Lincoln',
      code: 27,
      nmls: 1111127,
      state: 'NE',
      manager: 'Marlon Brando'
    }
    ,{
      name: 'Carson City',
      code: 28,
      nmls: 1111128,
      state: 'NV',
      manager: 'Harry Reid'
    }
    ,{
      name: 'Concord',
      code: 29,
      nmls: 1111129,
      state: 'NH',
      manager: 'John Irving'
    }
    ,{
      name: 'Trenton',
      code: 30,
      nmls: 1111130,
      state: 'NJ',
      manager: 'Jon Bon Jovi'
    }
    ,{
      name: 'Santa Fe',
      code: 31,
      nmls: 1111131,
      state: 'NM',
      manager: 'John Denver'
    }
    ,{
      name: 'Albany',
      code: 32,
      nmls: 1111132,
      state: 'NY',
      manager: 'Lucille Ball'
    }
    ,{
      name: 'Raleigh',
      code: 33,
      nmls: 1111133,
      state: 'NC',
      manager: 'Billy Graham'
    }
    ,{
      name: 'Bismark',
      code: 34,
      nmls: 1111134,
      state: 'ND',
      manager: 'Phil Jackson'
    }
    ,{
      name: 'Columbus',
      code: 35,
      nmls: 1111135,
      state: 'OH',
      manager: 'Neil Armstrong'
    }
    ,{
      name: 'Oklahoma City',
      code: 36,
      nmls: 1111136,
      state: 'OK',
      manager: 'Vince Gill'
    }
    ,{
      name: 'Salem',
      code: 37,
      nmls: 1111137,
      state: 'OR',
      manager: 'Sally Struthers'
    }
    ,{
      name: 'Harrisburg',
      code: 38,
      nmls: 1111138,
      state: 'PA',
      manager: 'Louisa May Alcott'
    }
    ,{
      name: 'Providence',
      code: 39,
      nmls: 1111139,
      state: 'RI',
      manager: 'Bobby Hackett'
    }
    ,{
      name: 'Columbia',
      code: 40,
      nmls: 1111140,
      state: 'SC',
      manager: 'John C. Calhoun'
    }
    ,{
      name: 'Pierre',
      code: 41,
      nmls: 1111141,
      state: 'SD',
      manager: 'Tom Brokaw'
    }
    ,{
      name: 'Nashville',
      code: 42,
      nmls: 1111142,
      state: 'TN',
      manager: 'Aretha Franklin'
    }
    ,{
      name: 'Austin',
      code: 43,
      nmls: 1111143,
      state: 'TX',
      manager: 'Carol Burnett'
    }
    ,{
      name: 'Salt Lake City',
      code: 44,
      nmls: 1111144,
      state: 'UT',
      manager: 'Butch Cassidy'
    }
    ,{
      name: 'Montpelier',
      code: 45,
      nmls: 1111145,
      state: 'VT',
      manager: 'Calvin Coolidge'
    }
    ,{
      name: 'Richmond',
      code: 46,
      nmls: 1111146,
      state: 'VA',
      manager: 'Arthur Ashe'
    }
    ,{
      name: 'Olympia',
      code: 47,
      nmls: 1111147,
      state: 'WA',
      manager: 'Bill Gates'
    }
    ,{
      name: 'Charleston',
      code: 48,
      nmls: 1111148,
      state: 'WV',
      manager: 'Don Knotts'
    }
    ,{
      name: 'Madison',
      code: 49,
      nmls: 1111149,
      state: 'WI',
      manager: 'Harry Houdini'
    }
    ,{
      name: 'Cheyenne',
      code: 50,
      nmls: 1111150,
      state: 'WY',
      manager: 'Jim Bridger'
    }
  ];

  this.getBranchInfo = function(id) {
    for (i = 0; i < this.branchList.length; i++) {
      if (this.branchList[i].code === parseInt(id)) {
        var branchInfo = this.branchList[i];
        return branchInfo;
      }
    }
  };

});
