import api from '@/services/api'

export default {
  fetchPlayers() {
    return api.get(`players/`)
              .then(response => response.data)
  },
  postPlayer(payload) {
    return api.post(`players/`, payload)
              .then(response => response.data)
  },
  deletePlayer(playerId) {
    return api.delete(`players/${playerId}`)
              .then(response => response.data)
  }
}