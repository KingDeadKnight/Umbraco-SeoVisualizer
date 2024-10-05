using System.Collections.Generic;
using Umbraco.Cms.Core.PropertyEditors;

namespace SeoVisualizer;

public class SeoVisualizerPreValueConfiguration
{
    [ConfigurationField("useNoIndex")]
    public bool UseNoIndex { get; set; }

    [ConfigurationField("titleSuffix")]
    public string TitleSuffix { get; set; }
}
