var clients = [
  { "Name": "nguyen le trong tien", "Sex": "Male", "Age": 21, "Hobby": "listen music", "Image": "./images/tien.jpg","Host": "https://baobaote00.github.io/solekia-html/", },
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
    { name: "Hobby", type: "text", width: 150 },
    { name: "Image", type: "text", width: 100, itemTemplate: function (value, item) { return `<img class="img-fluid w-25" src='${value}'/>` } },
    { name: "Host", type: "text", width: 200, itemTemplate: function (value, item) { return `<a href=${value}>${value}</a>` } },
    { type: "control" }
  ]
});
