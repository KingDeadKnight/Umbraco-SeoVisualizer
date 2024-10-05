using System.Collections.Generic;
using Umbraco.Cms.Core.PropertyEditors;

namespace SeoVisualizer;

public class SeoVisualizerPreValueConfiguration
{

    [ConfigurationField("maxCharsTitle")]
    public int MaxCharsTitle { get; set; }

    [ConfigurationField("maxCharsDescription")]
    public int MaxCharsDescription { get; set; }

    [ConfigurationField("titleSuffix")]
    public string? TitleSuffix { get; set; }

    [ConfigurationField("useNoIndex")]
    public bool UseNoIndex { get; set; }
}
