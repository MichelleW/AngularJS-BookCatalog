var myAPbooks = angular.module('myAPbooks',[]);

myAPbooks.controller('bookController', function () {
	this.books = books;
});

var books = [
    {
      title: 'Human Anatomy & Physiology, 1/e',
      author: 'Amerman',
      isbn: '0805382941',
      price: '110'
    },
    {
      title: 'Essentials of Human Anatomy & Physiology, 11/e',
      author: 'Marieb',
      isbn: '0321918754',
      price: '130'
    },
    {
      title: 'Essentials of Human Anatomy & Physiology, 10/e',
      author: 'Marieb',
      isbn: '0321799992',
      price: '150'
    },
    {
      title: 'Anatomy & Physiology, 5/e',
      author: 'Marieb / Hoehn',
      isbn: '0321860780',
      price: '125'
    }
    // {
    //   title: 'Human Anatomy & Physiology, 1/e',
    //   author: 'Amerman',
    //   isbn: '0805382941'
    // },{
    //   title: 'Essentials of Human Anatomy & Physiology, 11/e',
    //   author: 'Marieb',
    //   isbn: '0321918754'
    // },{
    //   title: 'Essentials of Human Anatomy & Physiology, 10/e',
    //   author: 'Marieb',
    //   isbn: '0321799992'
    // },{
    //   title: 'Anatomy & Physiology, 5/e',
    //   author: 'Marieb / Hoehn',
    //   isbn: '0321860780'
    // },{
    //   title: 'Human Anatomy & Physiology, 1/e',
    //   author: 'Amerman',
    //   isbn: '0805382941'
    // },{
    //   title: 'Essentials of Human Anatomy & Physiology, 11/e',
    //   author: 'Marieb',
    //   isbn: '0321918754'
    // },{
    //   title: 'Essentials of Human Anatomy & Physiology, 10/e',
    //   author: 'Marieb',
    //   isbn: '0321799992'
    // },{
    //   title: 'Anatomy & Physiology, 5/e',
    //   author: 'Marieb / Hoehn',
    //   isbn: '0321860780'
    // }
  ];