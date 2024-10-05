using System;
using System.Text.Json;
//using Newtonsoft.Json;
//using Newtonsoft.Json.Linq;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors;

namespace SeoVisualizer
{
    /// <summary>
    /// Converter for the property values
    /// </summary>
    public class SeoValuesPropertyEditorValueConverter : PropertyValueConverterBase
    {

        public override bool IsConverter(IPublishedPropertyType propertyType) => propertyType.EditorAlias.Equals("EnkelMedia.SeoVisualizer");

        public override Type GetPropertyValueType(IPublishedPropertyType propertyType) => typeof(SeoValues);

        public override PropertyCacheLevel GetPropertyCacheLevel(IPublishedPropertyType propertyType) => PropertyCacheLevel.Snapshot;

        public override object ConvertSourceToIntermediate(IPublishedElement owner, IPublishedPropertyType propertyType, object source, bool preview)
        {
            
            if (source == null) return new SeoValues();

            string nodeName = "";

            if (owner is IPublishedContent publishedContent)
            {
                nodeName = publishedContent.Name;
            }

            var seoValues = new SeoValues() { Title = nodeName };

            var sourceString = source.ToString();

            if (string.IsNullOrEmpty(sourceString))
                return seoValues;

            bool useTitleSuffixConfigured = false;
            bool useNoIndex = false;
            string configuredTitleSuffix = "";

            //TODO: v14 fix configuration
            var jConfig = propertyType.DataType.ConfigurationAs<SeoVisualizerPreValueConfiguration>();

            if(jConfig != null)
            {
                useNoIndex = jConfig.UseNoIndex;

                if (!string.IsNullOrEmpty(jConfig.TitleSuffix))
                {
                    configuredTitleSuffix = jConfig.TitleSuffix;
                    useTitleSuffixConfigured = !string.IsNullOrEmpty(configuredTitleSuffix);
                }
            }

            try
            {
                var obj = JsonSerializer.Deserialize<SeoValuesJsonModel>(sourceString);

                if (obj == null)
                    return seoValues;

                seoValues.ExcludeTitleSuffix = obj.ExcludeTitleSuffix;
                seoValues.OriginalTitle = obj.Title;
                seoValues.Description = obj.Description;

                // Only set the value from the JSON if the option is configured otherwise always false.
                if (useNoIndex)
                    seoValues.NoIndex = obj.NoIndex;

                // Only set Title if the input from the backoffice is not empty. Otherwise we want to keep the fallback to node name
                if (!string.IsNullOrEmpty(obj.Title))
                    seoValues.Title = obj.Title;

                if (useTitleSuffixConfigured)
                {
                    if (!obj.ExcludeTitleSuffix)
                    {
                        // Only append suffix if the title has a value
                        if (!string.IsNullOrEmpty(seoValues.Title))
                        {
                            seoValues.Title += configuredTitleSuffix;
                        }
                    }
                }

                return seoValues;


            }
            catch (Exception ex)
            {
                return seoValues;
                
            }

        }

    }

}
