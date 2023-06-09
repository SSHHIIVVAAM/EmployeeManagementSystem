import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filteredEmployees: [],
    // filteredAttendance: []
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    FILTER_EMPLOYEES(state, action) {
        const {employees,search} = action.payload
        const tempEmployees = employees.filter(
            (employee) => (employee.first_name + employee.last_name).toLowerCase().includes(search.toLowerCase())
            || employee.department.toLowerCase().includes(search.toLowerCase())
            || employee.role.toLowerCase().includes(search.toLowerCase())
            )

        state.filteredEmployees = tempEmployees
    },
    // FILTER_ATTENDANCE(state, action) {
    //   const {employees,search} = action.payload
    //   const tempEmployees = employees.filter(
    //       (employee) => (employee.first_name + employee.last_name).toLowerCase().includes(search.toLowerCase())
    //       || employee.department.toLowerCase().includes(search.toLowerCase())
    //       || employee.role.toLowerCase().includes(search.toLowerCase())
    //       )

    //   state.filteredEmployees = tempEmployees
    // },

  }
});

export const { FILTER_EMPLOYEES,
              //  FILTER_ATTENDANCE
              } = filterSlice.actions

export const selectFilteredEmployees = (state) => state.filter.filteredEmployees
// export const selectFilteredAttendance = (state) => state.filter.filteredAttendance

export default filterSlice.reducer