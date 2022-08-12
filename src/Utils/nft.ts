// TODO type
export const readNfc = async (onRead: (message: any, serialNumber: any) => void, onError: () => void) => {
  try {
    const ndef = new NDEFReader();
    await ndef.scan();
    alert("> Scan started");

    ndef.addEventListener("readingerror", () => {
      onError();
    });

    const onScan = ({ message, serialNumber }: any) => {
      onRead(message, serialNumber);
      ndef.removeEventListener("reading", onScan);
    };

    ndef.addEventListener("reading", onScan);
  } catch (error) {
    onError();
  }
};
