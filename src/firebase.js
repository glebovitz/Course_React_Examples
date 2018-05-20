import * as firebase from 'firebase';

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

database.ref('expenses')
  .on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

database.ref('expenses')
  .on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

  // call both for added and existing children
  database.ref('expenses')
  .on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

database.ref('expenses')
.once('value')
.then((snapshot) => {
  const expenses = [];
  snapshot.forEach((childSnapshot) =>{
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    });
  });
  console.log(expenses);
});

database.ref('expenses')
  .on ('value', (snapshot) => {
    const expenses = [];

    snapshot.forEach((childSnapshot) =>{
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });

    console.log(expenses);
});

database.ref('expenses').push({
  description: 'Rent',
  note: 'this is my rent for march',
  amount: 109500,
  createdAt: 10100
});


database.ref('-LC_HErc4MehUGrF6Fal').remove();

database.ref().push({
  title: 'course Topics',
  body: 'React, stuff'
});

database.ref('notes').set(notes);

database.ref().on('value', (snapshot) => {
  const { name, job: {title, company} } = snapshot.val();
  console.log(`${name} is a ${title} at ${company}`);
});

database.ref('location/city')
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  }).catch((error) => {
    console.log('Error fetching data', error);
  });

database.ref().set({
  name: 'Gregg Lebovitz',
  age: 61,
  stressLevel: 6,
  job: {
    title: 'software developer',
    company: 'Google'
  },
  location: {
    city: 'Brookline',
    country: 'United States'
  }
}).then(() => {
  console.log('this is saved');
}).catch((error) => {
  console.log('this failed', error);
});

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
});

database.ref('isSingle')
  .remove()
  .then(() => {
    console.log("remove successful");
  }).catch((error) => {
    console.log("remove failed", error);
  });
