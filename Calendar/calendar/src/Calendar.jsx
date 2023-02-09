import React from 'react';
import moment from 'moment/moment';
import 'moment/locale/ru'

export default function Calendar(props) {
    moment.locale('ru')
    let momentDate = moment(props.date).format('LLLL').replace(',','').split(' ');
    let monthYear = moment(props.date).format('MMMM Do YYYY, h:mm:ss a').replace(',','').split(' ');
    let lastDay = new Date(props.date.getFullYear(), props.date.getMonth() + 1, 0).getDate();
    let firstday = new Date(props.date.getFullYear(), props.date.getMonth()).getDay()-1;
    let lastDayPreviosMonth =  new Date(props.date.getFullYear(), props.date.getMonth()  -0, 0).getDate();
    let counter = 1;

    if (firstday==-1){
        firstday = 6;
    }


    let calendarRender = [
        [],[],[],[],[],[],[],
        [],[],[],[],[],[],[],
        [],[],[],[],[],[],[],
        [],[],[],[],[],[],[],
        [],[],[],[],[],[],[],
        [],[],[],[],[],[],[],
    ];

    


    for (let i=firstday; i<calendarRender.length; i++){
        calendarRender[i].push(counter);
        if(counter==props.date.getDate()){
            calendarRender[i].push('ui-datepicker-today');
        } 
        if (i>0){
            if(calendarRender[i-1][0]>calendarRender[i][0] || calendarRender[i-1][1]=='ui-datepicker-other-month'){
                calendarRender[i].push('ui-datepicker-other-month');
            }
        }
        
        else{
            calendarRender[i].push('');    
        }
        counter++;
        if (counter == lastDay+1){
            counter = 1;
        }
    };

    for(let i = calendarRender.length- 1; i > -1; i--){
        if (calendarRender[i].length==0){           
            calendarRender[i].push(lastDayPreviosMonth);
            lastDayPreviosMonth=lastDayPreviosMonth-1;
            calendarRender[i].push('ui-datepicker-other-month');
            
        };
    };



  return (
    <div class="ui-datepicker">
  <div class="ui-datepicker-material-header">
    <div class="ui-datepicker-material-day">{momentDate[0]}</div>
    <div class="ui-datepicker-material-date">
      <div class="ui-datepicker-material-day-num">{momentDate[1]}</div>
      <div class="ui-datepicker-material-month">{momentDate[2]}</div>
      <div class="ui-datepicker-material-year">{momentDate[3]}</div>
    </div>
  </div>
  <div class="ui-datepicker-header">
    <div class="ui-datepicker-title">
      <span class="ui-datepicker-month">{monthYear[0]}</span>&nbsp;<span class="ui-datepicker-year">{monthYear[2]}</span>
    </div>
  </div>
  <table class="ui-datepicker-calendar">
    <colgroup>
      <col></col>
      <col></col>
      <col></col>
      <col></col>
      <col></col>
      <col class="ui-datepicker-week-end"></col>
      <col class="ui-datepicker-week-end"></col>
    </colgroup>
    <thead>
      <tr>
        <th scope="col" title="Понедельник">Пн</th>
        <th scope="col" title="Вторник">Вт</th>
        <th scope="col" title="Среда">Ср</th>
        <th scope="col" title="Четверг">Чт</th>
        <th scope="col" title="Пятница">Пт</th>
        <th scope="col" title="Суббота">Сб</th>
        <th scope="col" title="Воскресенье">Вс</th>
      </tr>
    </thead>
    <tbody>
       <tr>
      </tr>
      <tr>
        <td class={calendarRender[0][1]}>{calendarRender[0][0]}</td>
        <td class={calendarRender[1][1]}>{calendarRender[1][0]}</td>
        <td class={calendarRender[2][1]}>{calendarRender[2][0]}</td>
        <td class={calendarRender[3][1]}>{calendarRender[3][0]}</td>
        <td class={calendarRender[4][1]}>{calendarRender[4][0]}</td>
        <td class={calendarRender[5][1]}>{calendarRender[5][0]}</td>
        <td class={calendarRender[6][1]}>{calendarRender[6][0]}</td>
      </tr>
      <tr>
        <td class={calendarRender[7][1]}>{calendarRender[7][0]}</td>
        <td class={calendarRender[8][1]}>{calendarRender[8][0]}</td>
        <td class={calendarRender[9][1]}>{calendarRender[9][0]}</td>
        <td class={calendarRender[10][1]}>{calendarRender[10][0]}</td>
        <td class={calendarRender[11][1]}>{calendarRender[11][0]}</td>
        <td class={calendarRender[12][1]}>{calendarRender[12][0]}</td>
        <td class={calendarRender[13][1]}>{calendarRender[13][0]}</td>
      </tr>
      <tr>
        <td class={calendarRender[14][1]}>{calendarRender[14][0]}</td>
        <td class={calendarRender[15][1]}>{calendarRender[15][0]}</td>
        <td class={calendarRender[16][1]}>{calendarRender[16][0]}</td>
        <td class={calendarRender[17][1]}>{calendarRender[17][0]}</td>
        <td class={calendarRender[18][1]}>{calendarRender[18][0]}</td>
        <td class={calendarRender[19][1]}>{calendarRender[19][0]}</td>
        <td class={calendarRender[20][1]}>{calendarRender[20][0]}</td>
      </tr>
      <tr>
        <td class={calendarRender[21][1]}>{calendarRender[21][0]}</td>
        <td class={calendarRender[22][1]}>{calendarRender[22][0]}</td>
        <td class={calendarRender[23][1]}>{calendarRender[23][0]}</td>
        <td class={calendarRender[24][1]}>{calendarRender[24][0]}</td>
        <td class={calendarRender[25][1]}>{calendarRender[25][0]}</td>
        <td class={calendarRender[26][1]}>{calendarRender[26][0]}</td>
        <td class={calendarRender[27][1]}>{calendarRender[27][0]}</td>
      </tr>
      <tr>
        <td class={calendarRender[28][1]}>{calendarRender[28][0]}</td>
        <td class={calendarRender[29][1]}>{calendarRender[29][0]}</td>
        <td class={calendarRender[30][1]}>{calendarRender[30][0]}</td>
        <td class={calendarRender[31][1]}>{calendarRender[31][0]}</td>
        <td class={calendarRender[32][1]}>{calendarRender[32][0]}</td>
        <td class={calendarRender[33][1]}>{calendarRender[33][0]}</td>
        <td class={calendarRender[34][1]}>{calendarRender[34][0]}</td>
      </tr>
      <tr>
        <td class={calendarRender[35][1]}>{calendarRender[35][0]}</td>
        <td class={calendarRender[36][1]}>{calendarRender[36][0]}</td>
        <td class={calendarRender[37][1]}>{calendarRender[37][0]}</td>
        <td class={calendarRender[38][1]}>{calendarRender[38][0]}</td>
        <td class={calendarRender[39][1]}>{calendarRender[39][0]}</td>
        <td class={calendarRender[40][1]}>{calendarRender[40][0]}</td>
        <td class={calendarRender[41][1]}>{calendarRender[14][0]}</td>
      </tr>
    </tbody>
  </table>
</div>
  )
}
