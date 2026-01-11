'use strict';

/* ===============================
   DATA SETUP
================================ */

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const officeHours = {
  thu: { open: 10, close: 18 },
  fri: { open: 10, close: 20 },
  sat: { open: 0, close: 24 }, // 24h open
};

const workspace = {
  name: 'TechHive Workspace',
  city: 'Bangalore, India',
  services: ['Development', 'Design', 'Testing', 'Deployment'],
  packages: ['Basic', 'Standard', 'Premium'],
  officeHours,

  bookService(serviceIndex, packageIndex) {
    return [this.services[serviceIndex], this.packages[packageIndex]];
  },

  scheduleVisit({ day = 'fri', time = '11:00', client }) {
    console.log(
      `Visit scheduled by ${client} on ${day} at ${time}`
    );
  },

  deployProject(mainTool, ...otherTools) {
    console.log('Main tool:', mainTool);
    console.log('Other tools:', otherTools);
  },
};

/* ===============================
   DESTRUCTURING & SPREAD
================================ */

const [firstService, , thirdService] = workspace.services;
console.log(firstService, thirdService);

const allPlans = [...workspace.packages, 'Enterprise'];
console.log(allPlans);

const tools = ['Git', 'Docker', 'Postman'];
workspace.deployProject('Node.js', ...tools);

/* ===============================
   OPTIONAL CHAINING & NULLISH
================================ */

for (const d of days) {
  const openTime = workspace.officeHours[d]?.open ?? 'closed';
  console.log(`On ${d}, office opens at: ${openTime}`);
}

/* ===============================
   SETS (UNIQUE VALUES)
================================ */

const employeeRoles = ['Dev', 'Tester', 'Dev', 'Manager', 'Tester'];
const uniqueRoles = [...new Set(employeeRoles)];
console.log(uniqueRoles);

/* ===============================
   MAPS (EVENT LOG)
================================ */

const systemLogs = new Map([
  [10, 'Login'],
  [25, 'File Upload'],
  [40, 'Logout'],
  [55, 'Password Change'],
  [70, 'Login'],
]);

const uniqueLogs = [...new Set(systemLogs.values())];
console.log('Unique logs:', uniqueLogs);

systemLogs.delete(40);

const lastMinute = [...systemLogs.keys()].pop();
console.log(`Average event every ${lastMinute / systemLogs.size} minutes`);

for (const [min, event] of systemLogs) {
  const phase = min <= 30 ? 'FIRST HALF' : 'SECOND HALF';
  console.log(`[${phase}] ${min}: ${event}`);
}

/* ===============================
   STRING UTILITIES
================================ */

function formatUsername(name) {
  const parts = name.toLowerCase().trim().split(' ');
  return parts.map(p => p[0].toUpperCase() + p.slice(1)).join(' ');
}

console.log(formatUsername('mD aSaD uz zAmAn'));

function maskId(id) {
  const str = String(id);
  return str.slice(-3).padStart(str.length, '*');
}

console.log(maskId(982374982374));

/* ===============================
   REST & LOGICAL OPERATORS
================================ */

function sumAll(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

console.log(sumAll(2, 4, 6, 8));

workspace.clients ||= 0;
workspace.clients &&= workspace.clients + 1;
console.log(workspace.clients);

/* ===============================
   OBJECT COPY (REFERENCE)
================================ */

const userProfile = {
  name: 'Ayaan',
  skills: ['JS', 'Node', 'MongoDB'],
};

const shallowCopy = { ...userProfile };
const deepCopy = structuredClone(userProfile);

deepCopy.skills.push('Docker');

console.log('Original:', userProfile);
console.log('Deep copy:', deepCopy);

/* ===============================
   PRACTICE FUNCTION CALLS
================================ */

workspace.scheduleVisit({
  client: 'Rahul',
  day: 'thu',
  time: '16:30',
});

console.log(workspace.bookService(0, 2));
