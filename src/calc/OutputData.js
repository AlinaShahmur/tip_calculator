import React from 'react';
import { useTranslation } from 'react-i18next';
export default function OutputData(props) {
    const { t } = useTranslation()
    let Res = props.result ? <p>{props.result}</p>:<p>{t('amount')}</p>
    return (
        <React.Fragment>
            <h3 className = 'title-h3'>{t('tip_amount')}</h3>
            {Res}
        </React.Fragment>
    )
}
