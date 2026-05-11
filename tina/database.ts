import { createDatabase } from "@tinacms/datalayer";

export default createDatabase({
  // TinaCMS will use Git as the data store in local development
  // and TinaCloud in production
});
