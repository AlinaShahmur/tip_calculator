import React from 'react';
import { useTranslation } from 'react-i18next';
export default function OutputData(props) {
    const { t } = useTranslation()
    return (
        <React.Fragment>
            <h3 className = 'title-h3'>{t('tip_amount')}</h3>
            {props.result}
        </React.Fragment>
    )
}
