using Microsoft.Extensions.Options;
using NPoco;
using Umbraco.Cms.Core.Configuration.Models;
using Umbraco.Cms.Core.IO;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Strings;
using Umbraco.Cms.Infrastructure.Migrations;
using Umbraco.Cms.Infrastructure.Packaging;
using Umbraco.Cms.Infrastructure.Persistence.Dtos;
using Umbraco.Cms.Infrastructure.Persistence;
using Umbraco.Extensions;

namespace SeoVisualizer.Migrations.V_14_0_0;

/// <summary>
/// Rename the PropertyEditorUi property for any data type using our property editors
/// so that it uses the new Property Editor UI
/// </summary>
public class RenamePropertyEditorUiAliasMigration : PackageMigrationBase
{
    public RenamePropertyEditorUiAliasMigration(
        IPackagingService packagingService,
        IMediaService mediaService,
        MediaFileManager mediaFileManager,
        MediaUrlGeneratorCollection mediaUrlGenerators,
        IShortStringHelper shortStringHelper,
        IContentTypeBaseServiceProvider contentTypeBaseServiceProvider,
        IMigrationContext context,
        IOptions<PackageMigrationSettings> packageMigrationsSettings) : base(packagingService, mediaService, mediaFileManager, mediaUrlGenerators, shortStringHelper, contentTypeBaseServiceProvider, context, packageMigrationsSettings)
    {

    }

    protected override void Migrate()
    {
        Sql<ISqlContext> sql = Sql()
            .Select<DataTypeDto>()
            .From<DataTypeDto>()
            .Where<DataTypeDto>(x => x.EditorUiAlias.Equals("EnkelMedia.SeoVisualizer"));

        List<DataTypeDto> dataTypeDtos = Database.Fetch<DataTypeDto>(sql);

        foreach (var datatype in dataTypeDtos)
        {
            datatype.EditorUiAlias = "EnkelMedia.SeoVisualizer.PropertyEditorUi";
            Database.Update(datatype);
        }
    }
}
