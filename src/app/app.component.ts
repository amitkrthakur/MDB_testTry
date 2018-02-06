import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public chartType:string = 'line';
        
    public chartDatasets:Array<any> = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset'}
    ];

    public chartLabels:Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

    public chartColors:Array<any> = [
        {
            backgroundColor: 'rgba(220,220,220,0.2)',
            borderColor: 'rgba(220,220,220,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(220,220,220,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(220,220,220,1)'
        },
        {
            backgroundColor: 'rgba(151,187,205,0.2)',
            borderColor: 'rgba(151,187,205,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(151,187,205,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(151,187,205,1)'
        }
    ];

    public chartOptions:any = { 
        responsive: true
    };

    public chartClicked(e: any): void { 
         
    } 
    
    public chartHovered(e: any): void { 
         
    }
    public myDatePickerOptions: IMyOptions = { 
      // Strings and translations
      dayLabels: {su: 'Sun', mo: 'Mon', tu: 'Tue', we: 'Wed', th: 'Thu', fr: 'Fri', sa: 'Sat'},
      dayLabelsFull: {su: "Sunday", mo: "Monday", tu: "Tuesday", we: "Wednesday", th: "Thursday", fr: "Friday", sa: "Saturday"},
      monthLabels: { 1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec' },
      monthLabelsFull: { 1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December" },

      // Buttons
      todayBtnTxt: "Today",
      clearBtnTxt: "Clear",
      closeBtnTxt: "Close",

      // Format
      dateFormat: 'dd.mm.yyyy',

      // First day of the week
      firstDayOfWeek: 'mo',

      // Disable dates
      disableUntil: undefined,
      disableSince: undefined,
      disableDays: undefined,
      disableDateRanges: undefined,
      disableWeekends: false,

      // Enable dates (when disabled)
      enableDays: undefined,

      // Year limits
      minYear: 1000, 
      maxYear: 9999,

      // Show Today button
      showTodayBtn: true,

      //Show Clear date button
      showClearDateBtn: true,

      markCurrentDay: true,
      markDates: undefined,
      markWeekends: undefined,
      disableHeaderButtons: false,
      showWeekNumbers: false,
      height: '100px',
      width: '50%',
      selectionTxtFontSize: '15px'
  };
  
  optionsSelect: Array<any>;

    ngOnInit() { 
        this.optionsSelect = [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
        ];
    } 


  
}
