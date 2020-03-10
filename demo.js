var Meeting = {
    var1:'Test',
    Time:6,
    var3:3,

    Schedule: function(room){
        console.log(`Your meeting is scheduled at ${this.Time} Clock at ${room}.`);
    },

    Reset: function(){
        this.var1 = '',
        this.var3 = 0,
        this.Time = 0
        this.print();
    },

    print: function(){
        console.log(this.var1+" "+this.var3+" "+this.Time);
    }
};

Meeting.Schedule('Zeal');
Meeting.Reset();
