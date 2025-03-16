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
};

export default PlayerService;
