Vue.component('select-date-modal', {
  data: function() {
      return {
          date_process : app.modals.selectdateProcess
      }
  },
  template: `  
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container px-4 pt-4 p sm:p-8 bg-white w-5/6 md:w-2/5 rounded-xl mx-auto">
          <div class="modal-header">
            <span @click="$emit('close');
            app.modals.selectdateProcess.first_step = true;
            app.modals.selectdateProcess.second_step = false;
            app.modals.selectdateProcess.third_step = false;
            app.modals.selectdateProcess.check = false;"
            class="cursor-pointer block text-right close">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g transform="translate(-334 -1164)">
                  <circle cx="12" cy="12" r="12" transform="translate(334 1164)" class="respond" fill="#b4bcc4"/>
                  <path d="M15.183,13.859a.936.936,0,0,1-1.324,1.324l-2.628-2.638L8.594,15.182A.936.936,0,0,1,7.27,13.859l2.638-2.628L7.279,8.584A.936.936,0,0,1,8.6,7.26L11.241,9.9,13.869,7.26a.936.936,0,0,1,1.324,1.324l-2.638,2.638,2.638,2.628Z" transform="translate(334.769 1164.779)" fill="#fff" fill-rule="evenodd"/>
                </g>
              </svg>
            </span>
            <span class="text-center header-text">
              <slot name="header">
                <h2 v-if="date_process.first_step"> Select a Year </h2>
                <h2 v-if="date_process.second_step"> Select a Month </h2>
                <h2 v-if="date_process.third_step"> Select a Day</h2>
                <h2 v-if="date_process.check"> Is This Date Correct?</h2>
              </slot>
            </span>
          </div>

          <div class="modal-body">
            <slot name="body">
              
            </slot>
          </div>

          <div class="modal-footer flex">
            <slot name="footer">
            <button v-if="app.modals.check" class="w-64 floating-sm rounded-lg font-bold text-white bg-grey-darker hover:bg-grey-darkest focus:outline-none py-5 mx-auto">ACCEPT</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>`
})



//Vue
const app = new Vue({
    el: '#app',
    data: {
      begin_year: 1919,
      current_year : new Date().getFullYear(),
      selected_day : '',
      selected_month : '',
      selected_year : '',
      years: [],
      p_days: [],
      days: [],
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      modals: {
        selectDate: false,
        selectdateProcess: {
          first_step: true,
          second_step: false,
          final_step: false,
          check: false
        }
      }
    },

    methods: {

      storeDays : function (month) {

        this.days = this.p_days[month]['amount'];

      },

      storeDates : function(date) {

        if (this.modals.selectdateProcess.first_step) {
          this.selected_year = date;
        }else if(this.modals.selectdateProcess.second_step){
          this.selected_month = date;
        }else if(this.modals.selectdateProcess.third_step) {
          this.selected_day = date;
        }
      }

    
    },

    computed: {



    },

    mounted: function() {

      //Calculate difference between beginning year and current year and stores it in an array for use

      let year_difference = 0;
      let arr = [];
        
      for (i=this.begin_year; i < this.current_year; i++) {
        year_difference += 1; 
        arr.push(this.begin_year + year_difference);
      }

      let month_length = Object.keys(this.months).length;

      let last_day;

      //Calculate days for each month

      for (i=0; i < month_length;i++) {
        let day_arr = [];
        last_day = new Date(1995, i + 1, 0).getDate();
        for (x=1;x<last_day + 1;x++) {
          day_arr.push(x);
          this.p_days[i] = {
            amount : day_arr
          };
        }
      }
 
      this.years = arr.reverse();

    }

});