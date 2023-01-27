import React, {Component} from 'react';
import {Form, Button, InputNumber} from 'antd';

class SatSetting extends Component {
    showSatellite = values => {
        console.log('Received values of form: ', values);
        this.props.onShow(values);
    }

    render() {
        return (
            <Form
                name="wrap"
                labelCol={{
                    flex: '110px',
                }}
                labelAlign="left"
                labelWrap
                wrapperCol={{
                    flex: 1,
                }}
                colon={false}
                className="sat-setting"
                onFinish={this.showSatellite}
            >
                <Form.Item
                    label="Latitude(degrees)"
                    name="latitude"
                    rules={[
                        {
                            required: true,
                            message: "Latitude required, between -90 to 90",
                        }
                    ]}
                    initialValue={-40}
                >
                    <InputNumber min={-90} max={90}
                                 style={{width: "100%"}}
                                 placeholder="Please input Latitude"
                    />
                </Form.Item>

                <Form.Item
                    label="Longitude(degrees)"
                    name="longitude"
                    rules={[
                        {
                            required: true,
                            message: "Longitude required, between -180 to 180",
                        }
                    ]}
                    initialValue={70}
                >
                    <InputNumber min={-180} max={180}
                                 style={{width: "100%"}}
                                 placeholder="Please input Longitude"
                    />
                </Form.Item>


                <Form.Item
                    label="Altitude(meters)"
                    name="altitude"
                    rules={[
                        {
                            required: true,
                            message: "Altitude required, between 0 to 5000",
                        }
                    ]}
                    initialValue={0}
                >
                    <InputNumber min={0} max={5000}
                                 style={{width: "100%"}}
                                 placeholder="Please input Altitude"
                    />
                </Form.Item>

                <Form.Item
                    label="Radius(degrees)"
                    name="radius"
                    rules={[
                        {
                            required: true,
                            message: "Radius required, between 0 to 90",
                        }
                    ]}
                    initialValue={90}
                >
                    <InputNumber min={0} max={90}
                                 style={{width: "100%"}}
                                 placeholder="Please input Radius"
                    />
                </Form.Item>

                <Form.Item
                    label="Duration(secs)"
                    name="duration"
                    rules={[
                        {
                            required: true,
                            message: "Duration required, between 0 to 60",
                        }
                    ]}
                >
                    <InputNumber min={0} max={60}
                                 style={{width: "100%"}}
                                 placeholder="Please input Duration"
                    />
                </Form.Item>

                <Form.Item className="show-nearby">
                    <Button type="primary" htmlType="submit" style={{textAlign: "center"}}>
                        Find Satellite
                    </Button>
                </Form.Item>

            </Form>
        );
    }
}

export default SatSetting;
