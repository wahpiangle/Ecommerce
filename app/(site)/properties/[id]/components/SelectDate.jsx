import { DatePicker, Space, ConfigProvider } from 'antd';

const Datepicker = ({setDate}) => {

    return (
        <ConfigProvider theme={{
            token: {
                'colorText': '#FFFFFF',
                'colorTextPlaceholder': '#FFFFFF',
                'colorBgBase': '#1A1D1F',
                'colorIcon': '#FFFFFF',
                'colorIconHover': '#6F767E',
                'colorBorder': '#FFFFFF',
                'colorTextDisabled': '#858585',
                'controlItemBgActive': '#454545',
            }
        }}>
            <Space direction="vertical" size={12}>
                <DatePicker onChange={(value) => {
                    setDate(value)
                }}
                />
            </Space>
        </ConfigProvider>
    )
}

export default Datepicker

