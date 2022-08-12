export const readNfc = async (onRead: (message: NDEFMessage, serialNumber: any) => void, onError: () => void) => {
  try {
    const ndef = new NDEFReader();
    await ndef.scan();

    const onScan = ({ message, serialNumber }: any) => {
      onRead(message, serialNumber);
      ndef.removeEventListener("reading", onScan);
    };

    ndef.addEventListener("reading", onScan);
  } catch (error) {
    onError();
  }
};

export const writeNfc = async (message: string, onDone: () => void, onError: () => void) => {
  try {
    const ndef = new NDEFReader();
    await ndef.write(message);
    onDone();
  } catch (error) {
    onError();
  }
};

export const decodeNfcRecord = (record?: NDEFRecord) => {
  return record ? new TextDecoder(record.encoding).decode(record.data) : "";
};
