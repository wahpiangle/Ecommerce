import { DatePicker, Space } from 'antd';
import { ConfigProvider } from 'antd';

const { RangePicker } = DatePicker;

const Datepicker = ({ setDates, isWideScreen }) => {
    return (
        <div className={`${isWideScreen? 'border-r-2': 'border-b-2'} border-secondaryText px-3 flex-1`}>
            <h2 className='text-secondaryText'>When</h2>
            <div className='flex items-center justify-between gap-4 mt-1 cursor-pointer group'>
                <ConfigProvider theme={{
                    token: {
                        'colorText': '#FFFFFF',
                        'colorTextPlaceholder': '#FFFFFF',
                        'colorBgBase': '#1A1D1F',
                        'colorIcon': '#FFFFFF',
                        'colorBorder': '#FFFFFF',
                        'colorTextDisabled': '#858585',
                        'controlItemBgActive': '#454545',
                    }
                }}>
                    <Space direction="vertical" size={12}>
                        <RangePicker onChange={(values) => {
                            if (!values) { return setDates([]) }
                            const v1 = values[0].$d;
                            const v2 = values[1].$d;
                            setDates([v1, v2])
                        }}
                        />
                    </Space>
                </ConfigProvider>
            </div>
        </div>
    )
}

export default Datepicker

