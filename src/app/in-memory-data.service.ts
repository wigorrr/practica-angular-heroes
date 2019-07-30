import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
  const heroes = [
      { id: 11, name: 'Mr. Nice' , created: '2018-03-28 19:47:42'},
      { id: 12, name: 'Narco' , created: '2018-02-15 12:17:22'},
      { id: 13, name: 'Bombasto', created: '2017-05-18 16:47:42'},
      { id: 14, name: 'Celeritas', created: '2012-10-22 17:47:42' },
      { id: 15, name: 'Magneta', created: '2011-08-19 10:47:06' },
      { id: 16, name: 'RubberMan', created: '2010-07-14 01:07:02' },
      { id: 17, name: 'Dynama', created: '2015-03-28 13:13:22' },
      { id: 18, name: 'Dr IQ', created: '2016-04-01 12:07:25' },
      { id: 19, name: 'Magma', created: '2016-12-12 20:15:42' },
      { id: 20, name: 'Tornado', created: '2014-11-28 19:47:42' }
    ];
    return {heroes};
  }
}
