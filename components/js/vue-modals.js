Vue.component('calender-days-modal', {
    data: function() {

        return {
            
        }
    },
    template: `  <transition name="calender-days-modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container p-8">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <table>
                <tr class="cal_dotw">  
                  <th> Sun </th>
                  <th> Mon </th>
                  <th> Tue </th>
                  <th> Wed </th>
                  <th> Thu </th>
                  <th> Fri </th>
                  <th> Sat </th>
                </tr>
                <tr>
                  <td class="days_diff_month"> 30 </td>
                  <td class="days_diff_month"> 31 </td>
                  <td> 1 </td>
                  <td> 2 </td>
                  <td> 3 </td>
                  <td> 4 </td>
                  <td> 5 </td>
                </tr>
                <tr>
                  <td> 6 </td>
                  <td> 7 </td>
                  <td> 8 </td>
                  <td> 9 </td>
                  <td> 10 </td>
                  <td> 11 </td>
                  <td> 12 </td>
                </tr>
                <tr>
                  <td> 13 </td>
                  <td> 14 </td>
                  <td> 15 </td>
                  <td> 16 </td>
                  <td> 17 </td>
                  <td> 18 </td>
                  <td> 19 </td>
                </tr>
                <tr>
                  <td> 20 </td>
                  <td> 21 </td>
                  <td> 22 </td>
                  <td> 23 </td>
                  <td> 24 </td>
                  <td> 25 </td>
                  <td> 26 </td>
                </tr>
                <tr>
                  <td> 27 </td>
                  <td> 28 </td>
                  <td> 29 </td>
                  <td> 30 </td>
                  <td> 31 </td>
                  <td class="days_diff_month"> 1 </td>
                  <td class="days_diff_month"> 2 </td>
                </tr>
              </table>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">

              <button class="modal-default-button py-8 px-12 text-white bg-teal" @click="$emit('close')">
                Close
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>`
  })