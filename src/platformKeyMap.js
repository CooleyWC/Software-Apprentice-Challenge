const PLATFORM_KEY_MAP = {
    facebook_ads: {
        campaign: "campaign_name",
        adset: "media_buy_name",
        creative: "ad_name",
        spend: "spend",
        impressions: "impressions",
        clicks: "clicks"
    },
    twitter_ads: {
        campaign: "campaign",
        adset: "ad_group",
        creative: "image_name",
        spend: "spend",
        impressions: "impressions",
        clicks: "post_clicks"
    },
    snapchat_ads: {
        campaign: "campaign_name",
        adset: "ad_squad_name",
        creative: "creative_name",
        spend: "cost",
        impressions: "impressions",
        clicks: "post_clicks"
    },
}

export default PLATFORM_KEY_MAP