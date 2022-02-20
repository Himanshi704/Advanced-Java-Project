import axios from 'axios';

const BUS_API_BASE_URL = "http://localhost:8080/api/v1/bus";

class EmployeeService {

    getAllBus(){
        return axios.get(BUS_API_BASE_URL);
    }

    addBus(bus){
        return axios.post(BUS_API_BASE_URL, bus);
    }

    getBusById(busId){
        return axios.get(BUS_API_BASE_URL + '/' + busId);
    }

    updateBus(bus, busId){
        return axios.put(BUS_API_BASE_URL + '/' + busId, bus);
    }

    deleteBus(busId){
        return axios.delete(BUS_API_BASE_URL + '/' + busId);
    }
}

export default new EmployeeService()