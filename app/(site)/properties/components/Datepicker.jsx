import { DatePicker, Space } from 'antd';
import { ConfigProvider } from 'antd';

const { RangePicker } = DatePicker;

const Datepicker = ({ setDates }) => {
    return (
        <ConfigProvider theme={{
            token:{
                'colorText': '#000000',
                'colorTextPlaceholder': '#000000',
            }
        }}>
            <Space direction="vertical" size={12}>
                <RangePicker onChange={(values) => {
                    if(!values){return setDates([])}
                    const v1 = values[0].$d;
                    const v2 = values[1].$d;
                    setDates([v1, v2])
                }}
                />
            </Space>
        </ConfigProvider>
    )
}

export default Datepicker