import api from "./axios";

const PlayerService = {
  getPlayer: async () => {
    try {
      const { data } = await api.get("/players");
      return data;
    } catch (error) {
      console.log("Serverga req junatishdagi xatolik", error);
    }
  },

  postPlayerCreated: async (datas) => {
    try {
      const { data } = await api.post("/players", datas);
      return data;
    } catch (error) {
      console.log("post qilishdagi xatolik");
    }
  },
};

export default PlayerService;
