const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];

const Jose = users.find(user => user.firstName === 'Jose');
console.log('User named Jose:', Jose);

const premiumMembers = users.filter(user => user.isPremiumMember);
console.log('User is a premium member:', premiumMembers);

const lastNames = users.map(user => user.lastName);
console.log('Users last names are:', lastNames);

const loggedInMoreThan10Times = users
  .filter(user => user.logins > 10)
  .map(user => `${user.firstName} ${user.lastName}`);
console.log('10x login users:', loggedInMoreThan10Times);

const totalLogins = users.reduce((acc, user) => acc + user.logins, 0);
console.log('Total Logins:', totalLogins);



