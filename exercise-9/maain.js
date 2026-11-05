let car = {
    modal:"b-m-w",
    make:"t-x-t-12",
    year: 1998,

    star:function(){
        console.log('car has start',this.year);
    }
}
console.log(car);
console.log(car.star());