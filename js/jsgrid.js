var clients = [
  { "Name": "nguyen le trong tien", "Sex": "Male", "Age": 21, "Hobby": "listen music", "Image": "./images/tien.jpg" },
];

$("#jsGrid").jsGrid({
  width: "100%",

  inserting: true,
  editing: true,
  sorting: true,
  paging: true,

  data: clients,

  fields: [
    { name: "Name", type: "text", width: 150, validate: "required",itemTemplate: function (value, item) { return `<span style"text-transform: capitalize;">${value}</span>` }},
    { name: "Sex", type: "text", width: 50 },
    { name: "Age", type: "number", width: 50 },
    { name: "Hobby", type: "text", width: 200 },
    { name: "Image", type: "text", width: 200, itemTemplate: function (value, item) { return `<img class="img-fluid w-25" src='${value}'/>` } },
    { type: "control" }
  ]
});