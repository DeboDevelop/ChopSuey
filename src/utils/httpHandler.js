import AxiosInstance from "../routes/AxiosInstance";

const httpHandler = async (
    url,
    method = 'GET',
    body = {}
) => {
    let data = null;
    try {
        switch (method) {
            case 'GET':
                data = await AxiosInstance.get(url)
                break;
            case 'POST':
                return

            default:
                break;
        }
    } catch (error) {

    }
    finally {
        return data
    }
}

export default httpHandler;