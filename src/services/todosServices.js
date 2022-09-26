import httpService from './httpServices';
import { GET_TODOS_URL } from 'constants/api';

class TodosService {
  getTodos(body) {
    return httpService.get(GET_TODOS_URL);
  }
}

export default new TodosService();
