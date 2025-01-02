import { PageContext } from "@/App";
import { Text } from "@chakra-ui/react";
import { useContext } from "react";

function SettingsPage() {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("PageContext is not provided");
  }
  const { setPage } = context

  return (
    <Text onClick={() => setPage('home')}>back</Text>
  )
}

export default SettingsPage